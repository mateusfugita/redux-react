import { connect } from 'react-redux'

const Video = ({ activeModule, activeLesson }) => {
  return ( 
    <div>
      <strong style={{marginRight: '10px'}}>Módulo: {activeModule.title}</strong>
      <span>Aula: {activeLesson.title}</span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
});
 
export default connect(mapStateToProps)(Video);