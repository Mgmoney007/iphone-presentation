import type { CSSProperties } from "react";

export type DeviceEra =
  | "original"
  | "iphone4"
  | "iphone6"
  | "iphonex"
  | "modern";

type DeviceSilhouetteProps = {
  era: DeviceEra;
  className?: string;
};

const ERA_MAP: Record<
  DeviceEra,
  {
    width: number;
    height: number;
    radius: number;
    bezel: number;
    notch: boolean;
    island: boolean;
    homeButton: boolean;
  }
> = {
  original: {
    width: 220,
    height: 430,
    radius: 26,
    bezel: 18,
    notch: false,
    island: false,
    homeButton: true,
  },
  iphone4: {
    width: 210,
    height: 420,
    radius: 18,
    bezel: 16,
    notch: false,
    island: false,
    homeButton: true,
  },
  iphone6: {
    width: 230,
    height: 455,
    radius: 30,
    bezel: 16,
    notch: false,
    island: false,
    homeButton: true,
  },
  iphonex: {
    width: 230,
    height: 470,
    radius: 34,
    bezel: 10,
    notch: true,
    island: false,
    homeButton: false,
  },
  modern: {
    width: 235,
    height: 485,
    radius: 38,
    bezel: 9,
    notch: false,
    island: true,
    homeButton: false,
  },
};

export function DeviceSilhouette({
  era,
  className = "",
}: DeviceSilhouetteProps) {
  const spec = ERA_MAP[era];

  return (
    <div
      className={`device-shell ${className}`}
      style={
        {
          "--device-width": `${spec.width}px`,
          "--device-height": `${spec.height}px`,
          "--device-radius": `${spec.radius}px`,
          "--device-bezel": `${spec.bezel}px`,
        } as CSSProperties
      }
    >
      <div className="device-body">
        <div className="device-screen">
          {spec.notch && <div className="device-notch" />}
          {spec.island && <div className="device-island" />}
        </div>

        {spec.homeButton && <div className="device-home-button" />}
      </div>
    </div>
  );
}