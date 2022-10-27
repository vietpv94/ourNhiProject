import * as React from "react";
import { CloseIcon } from "../icon/close";
import { Box, Wrapper } from "./style";
import { useLoadReviewImage } from "./useLoadReviewImage";

export interface IInputImageProps {
  id: string;
  text: string;
  onChange: (file: any) => void;
}

export function InputImage({ id, text, onChange }: IInputImageProps) {
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
        <input
          id={id}
          type="file"
          onChange={(e) => {
            onSelectFile(e);
            if (!e.target.files || e.target.files.length === 0) {
              return;
            }
            onChange(e.target.files[0]);
          }}
        />
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
