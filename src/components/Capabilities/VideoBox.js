export default function VideoBox({ id, src }) {
  return (
    <div id={id}>
      <video
        id="video"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
