import { Container } from 'reactstrap';

const BasePage = ({ className = '', header, children }) => {
  return (
    <div className={`base-page ${className}`}>
      <Container>
        {header && (
          <div className="page-header">
            <h1 className="page-header-title">{header}</h1>
          </div>
        )}
        {children}
      </Container>
    </div>
  );
};

export default BasePage;
