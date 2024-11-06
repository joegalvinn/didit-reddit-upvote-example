"use client";

export default function error() {
  return (
    <div className="text-5xl pt-40">
      <h2>You are unable to perform this action without signing in.</h2>
      <button onClick={() => reset()}>Go Back</button>
    </div>
  );
}
