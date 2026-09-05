import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Nothing on this site renders an image wider than ~1200px in its own
    // container, so cap the generated variants there instead of Next's
    // default up to 3840px — avoids serving oversized images for the hero
    // slider (was the LCP bottleneck: a 960x543 source was being requested
    // at w=3840, uselessly upscaled).
    deviceSizes: [360, 480, 640, 768, 1024, 1200],
    imageSizes: [64, 96, 128, 256, 384],
  },
};

export default nextConfig;
