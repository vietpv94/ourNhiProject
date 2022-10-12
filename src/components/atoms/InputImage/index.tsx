import * as React from "react";
import { CloseIcon } from "../icon/close";
import { Box, Wrapper } from "./style";
import { useLoadReviewImage } from "./useLoadReviewImage";

export interface IInputImageProps {
  id: string;
  text: string;
}

export function InputImage({ id, text }: IInputImageProps) {
  const [preview, setPreview, selectedFile, onSelectFile] =
    useLoadReviewImage();
  return (
    <Wrapper>
      <Box className={`${selectedFile && preview ? "active" : ""}`}>
        {selectedFile && preview && (
          <div
            className="svg"
            onClick={() => {
              setPreview("");
            }}
          >
            <CloseIcon />
          </div>
        )}
        <label htmlFor={id} />
        <input id={id} type="file" onChange={(e) => onSelectFile(e)} />
        {selectedFile && preview && (
          <img className="preview-image" src={preview} />
        )}
        <div className="center">
          <div className="circle"></div>
          <span>Take a photo</span>
        </div>
      </Box>
      <div className="text">{text}</div>
    </Wrapper>
  );
}
