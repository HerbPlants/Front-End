"use client"

import { LoaderCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LoadingButton({ icon = <LoaderCircle/>,isLoading, children, ...props }) {
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <svg
            className="w-4 h-4 animate-spin text-dark-gray-shades-15"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  )
}
