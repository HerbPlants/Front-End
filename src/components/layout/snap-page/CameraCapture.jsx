"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { ImageUp, ScanSearch } from "lucide-react";

const MAX_FILE_SIZE = 2 * 1024 * 1024;

const CameraCapture = ({
  setPredictionResult,
  isLoading,
  handlePredict,
  toast,
  capturedImage,
  setCapturedImage,
  showAnalyzeButton,
}) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const [stream, setStream] = useState(null);
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
      setStream(mediaStream);
    } catch (error) {
      // console.error("Gagal akses kamera:", error);
      toast({
        title: "Gagal Mengakses Kamera",
        description:
          "Silakan izinkan akses kamera di browser atau pengaturan perangkat.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    if (stream && videoRef.current) {
      const videoElement = videoRef.current;
      videoElement.srcObject = stream;

      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // console.warn("Play error:", error.message);
        });
      }
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
      setPredictionResult(null);
      stopCamera();
    }
  };

  const stopCamera = () => {
    stream?.getTracks().forEach((track) => track.stop());
    setStream(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast({
        title: "File tidak valid",
        description: "Silakan upload file gambar (jpeg, png, dll).",
        className: "bg-dark-green-shades-20 text-white border-none",
        duration : 3000,
      });
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast({
        title: "Ukuran Gambar Terlalu Besar",
        description: "Silakan upload gambar dengan ukuran maksimal 2MB.",
        className: "bg-dark-green-shades-20 text-white border-none",
        duration : 3000,
      });
      return;
    }

    stopCamera();

    const reader = new FileReader();
    reader.onloadend = () => {
      setCapturedImage(reader.result);
      setPredictionResult(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <Card className="px-4 py-6 space-y-4 max-w-screen-xl mx-auto border bg-green-shades-95 border-green-shades-90 rounded-xl">
      <CardHeader className="p-0 bg-green-shades-97 rounded-2xl border-2 border-dashed border-green-shades-75">
        <div className="w-full h-full flex items-center justify-center sm:min-w-96 md:min-w-[640px] lg:min-w-[800px] md:aspect-video">
          {!stream && !capturedImage && (
            <div className="w-full h-full mx-auto space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8 py-6 px-4 flex flex-col items-center justify-center">
              <p className="w-full text-dark-grey-shades-35 text-center text-xs sm:text-base md:text-xl lg:text-2xl font-medium">
                Buka kamera untuk identifikasi tanaman
              </p>

              <div className="w-full mx-auto flex items-center justify-center bg-green-shades-90 rounded-md max-w-48 sm:max-w-64 md:max-w-[460px] aspect-video">
                <Image
                  src="/svg/image-icon.svg"
                  alt="Placeholder"
                  width={48}
                  height={48}
                  className="w-6 h-6 sm:w-10 sm:h-10"
                />
              </div>
            </div>
          )}

          {stream && !capturedImage && (
            <div className="w-full px-4 sm:px-6 md:px-8 max-w-screen-sm">
              <div className="mx-auto max-w-screen-sm overflow-hidden rounded-lg border flex items-center justify-center">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="min-w-full aspect-video object-cover"
                />
              </div>
            </div>
          )}

          {capturedImage && (
            <div className="w-full h-full mx-auto py-6 px-4 flex flex-col items-center justify-center max-w-screen-sm">
              <Image
                src={capturedImage}
                alt="Captured"
                width={480}
                height={480}
                className="w-full aspect-video object-cover rounded-md"
              />
            </div>
          )}
        </div>

        <canvas ref={canvasRef} style={{ display: "none" }} />
      </CardHeader>

      <CardFooter className="flex justify-center">
        <div className="flex gap-2 flex-wrap justify-center md:justify-between w-full">
          <div className="flex gap-2">
            {!capturedImage && !stream && (
              <Button onClick={startCamera}>Buka Kamera</Button>
            )}

            {!capturedImage && stream && (
              <>
                <Button onClick={takeSnapshot}>Ambil Gambar</Button>
                <Button variant="destructive" onClick={stopCamera}>
                  Tutup Kamera
                </Button>
              </>
            )}

            {capturedImage && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="bg-green-shades-90 border-green-shades-75 hover:bg-green-shades-85 px-6"
                  onClick={() => {
                    setCapturedImage(null);
                    setPredictionResult(null);
                    startCamera();
                  }}
                >
                  Ulangi
                </Button>
                {showAnalyzeButton && (
                  <Button
                    onClick={handlePredict}
                    disabled={isLoading}
                    className="flex gap-2 items-center justify-center px-4 rounded-sm"
                  >
                    <div className="flex gap-1 items-center justify-center">
                      <ScanSearch size={30} />
                      <p className="">
                        {isLoading ? "Memproses..." : "Analisa Tumbuhan"}
                      </p>
                    </div>
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Upload Gambar */}
          <label
            htmlFor="file-upload"
            className="inline-block cursor-pointer bg-dark-green-shades-25 text-dark-grey-shades-97 px-4 py-2 rounded hover:bg-dark-green-shades-30 transition"
          >
            <div className="flex gap-1 items-center justify-center">
              <ImageUp size={18} />
              <p className="">Upload Gambar</p>
            </div>

            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </label>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CameraCapture;
