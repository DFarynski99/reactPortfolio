import TextBox from "./TextBox";
import VideoBox from "./VideoBox";

export default function CapabilityElement({divID, capabilityTextNUMBER, title, description, onClick, cta, capabilityVideoNUMBER, src}) {
  return (
    <div id={divID}>
      <TextBox
        id={capabilityTextNUMBER}
        title={title}
        description={description}
        onClick={onClick}
        cta={cta}
      />

      <VideoBox id={capabilityVideoNUMBER} src={src}/>
    </div>
  );
}
