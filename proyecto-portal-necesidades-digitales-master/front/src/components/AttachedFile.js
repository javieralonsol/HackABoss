export const AttachedFile = ({ fileName }) => {
  return (
    <div>
    <a
      className="attached-div"
      download={fileName.split('_').slice(1).join('_').split('.').slice(-1).toString()}
      href={fileName}
      rel="noreferrer"
      target="_blank"
    >
      <div className="ellipsis">{fileName.split('_').slice(1).join('_')}&nbsp;</div>
      <span
        className="attached-file"
        data-extension={fileName.split('.').slice(-1).toString()}
        title={fileName.split('_').slice(1).join('_')}
      >
        Archivo adjunto
      </span>
    </a></div>
  );
};
