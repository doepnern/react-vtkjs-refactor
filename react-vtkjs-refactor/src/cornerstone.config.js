import cornerstoneIn from "cornerstone-core";

if (!self.cornerstone) self.cornerstone = cornerstoneIn;

export function overrideCornerstone(corner) {
  self.cornerstone = corner;
}

export function getCornerstone() {
  return self.cornerstone;
}
