"use client";

let sharedAudioContext: AudioContext | null = null;

export function getAudioContext() {
  if (!sharedAudioContext || sharedAudioContext.state === "closed") {
    sharedAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return sharedAudioContext;
}

export function closeAudioContext() {
  if (sharedAudioContext && sharedAudioContext.state !== "closed") {
    sharedAudioContext.close();
    sharedAudioContext = null;
  }
}
