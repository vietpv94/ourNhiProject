import React from "react";

export const useLoadReviewImage = () => {
  const [selectedFileFont, setSelectedFileFont] = React.useState();
  const [previewFont, setPreviewFont] = React.useState<any>("");
  const [removeFont, setRemoveFont] = React.useState(false);
  React.useEffect(() => {
    if (!selectedFileFont) {
      setPreviewFont(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFileFont);
    setPreviewFont(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFileFont]);

  const onSelectFileFont = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFileFont(undefined);
      return;
    }
    setSelectedFileFont(e.target.files[0]);
  };
  return [previewFont, setPreviewFont, selectedFileFont, onSelectFileFont];
};
