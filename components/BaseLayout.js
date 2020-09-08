import Header from './Header';

const BaseLayout = ({
  children,
  className,
  navClass = 'with-bg',
  user,
  loading,
}) => {
  return (
    <div className="layout-container">
      <Header className={navClass} user={user} loading={loading} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
