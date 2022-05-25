
   
import PropTypes from 'prop-types';

 const Section = ({ children, title }) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};
export default Section;

Section.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
};