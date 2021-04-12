export const Loading = ({ loadingOn }) => {
  // console.log('Pintando Loading');

  return (
    <aside className={`loading ${loadingOn ? 'loading-visible-on' : ''}`}>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </aside>
  );
};
