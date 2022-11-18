import React, {Component} from "react";
import {reduxForm, Field} from 'redux-form';
//handleSubmit provided by redux form
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {

    renderFields() {
        return (
          <div>
            {formFields.map(({ name, label }) => {
              return (
                <Field
                  key={name}
                  name={name}
                  label={label}
                  type="text"
                  component={SurveyField}
                />
              )
            })}
          </div>
        ) ;
      }
 render (){
    return(
        <div>
            <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                <button type="submit" className="teal btn-flat right white-text">next
                <i className="material-icons right">done</i>
                
                </button>

                <Link to = "/surveys" className="red btn-flat left white-text">cancel
                <i className="material-icons left">cancel</i>
                
                </Link>
            </form>
        </div>
    )

 }
}

function validate(values) {
    const errors = {};
    errors.recipients = validateEmails(values.recipients || '');
    formFields.forEach(({name}) => {
        if(!values[name]){
            errors[name] = 'you must provide a value'
        }
        
    });
    
    return errors;  
 }
export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
}) (SurveyForm)