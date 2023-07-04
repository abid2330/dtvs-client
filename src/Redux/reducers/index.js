import { combineReducers } from 'redux';
import authReducer from './authReducer';
import degreeValidationReducer from './degreeValidationReducer';
import studentReducer from './studentReducer';
import contactReducer from './contactReducer';
import userReducer from './userReducer';
import departmentReducer from './departmentReducer';
import uploadcsvReducer from './uploadcsvReducer';
import degreeApplicationReducer from './degreeApplicationReducer';
import viewContactReducer from './viewContactReducer';
import viewFeedbackReducer from './viewFeedbackReducer';
import countReducer from './countReducer';
import applicationsReducer from './applicationsReducer';
import applyApplicationReducer from './applyApplicationReducer';
import feeChalanReducer from './feeChalanReducer';
import statusReducer from './statusReducer';
import sendfeedbackReducer from './sendfeedbackReducer';
import updatePasswordReducer from './updatePasswordReducer';
import documentReducer from './documentReducer';

export default combineReducers({
  auth: authReducer,
  student: studentReducer,
  successapplication: degreeValidationReducer,
  contactus: contactReducer,
  user: userReducer,
  departments: departmentReducer,
  uploadcsvfile: uploadcsvReducer,
  degreeapplication: degreeApplicationReducer,
  viewcontact: viewContactReducer,
  viewfeedback: viewFeedbackReducer,
  countapplication: countReducer,
  applications: applicationsReducer,
  applyapplication: applyApplicationReducer,
  feechalan: feeChalanReducer,
  status: statusReducer,
  sendfeedback: sendfeedbackReducer,
  updatepass: updatePasswordReducer,
  showdoc: documentReducer,
});
