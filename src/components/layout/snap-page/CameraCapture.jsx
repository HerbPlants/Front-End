"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const { toast } = useToast();

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
      setStream(mediaStream);
    } catch (error) {
      console.error("Gagal akses kamera:", error);
      toast({
        title: "Gagal Mengakses Kamera",
        description:
          "Silakan izinkan akses kamera di browser atau pengaturan perangkat.",
        className: cn(
          "fixed max-w-[420px] top-4 right-4 bg-red-600 text-white"
        ),
      });
    }
  };

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
      videoRef.current.play().catch((err) => {
        console.error("Gagal play video:", err);
      });
    }
  }, [stream]);

  const takeSnapshot = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");
    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataURL = canvas.toDataURL("image/png");
      setCapturedImage(dataURL);
    }
  };

  const stopCamera = () => {
    stream?.getTracks().forEach((track) => track.stop());
    setStream(null);
  };

  return (
    <Card className="p-4 space-y-4 max-w-screen-lg mx-auto border border-green-500 border-dashed rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        {!stream && !capturedImage && (
          <img
            src="/images/assets/upload_image_placeholder.png"
            alt="Placeholder"
            className="w-full rounded border"
            style={{ maxHeight: "400px" }}
          />
        )}

        {stream && !capturedImage && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full rounded"
            style={{ maxHeight: "400px" }}
          />
        )}

        {capturedImage && (
          <img
            src={capturedImage}
            alt="Captured"
            className="w-full rounded border"
            style={{ maxHeight: "400px" }}
          />
        )}

        <canvas ref={canvasRef} style={{ display: "none" }} />

        <div className="flex gap-2 flex-wrap justify-center">
          {!stream ? (
            <Button onClick={startCamera}>Buka Kamera</Button>
          ) : !capturedImage ? (
            <Button onClick={takeSnapshot}>Ambil Gambar</Button>
          ) : null}

          {capturedImage && (
            <Button
              variant="secondary"
              onClick={() => {
                setCapturedImage(null);
                startCamera();
              }}
            >
              Ulangi
            </Button>
          )}

          {stream && (
            <Button variant="destructive" onClick={stopCamera}>
              Tutup Kamera
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CameraCapture;
