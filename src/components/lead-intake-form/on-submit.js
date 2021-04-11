// @flow
import { Routes } from "../../constants";

export const handleSubmit = async (values, props) => {
    await props.props.sendEmailLead(values, props.props.history.pathname);
    await props.props.history.push(Routes.ThankYouLeadIntakeForm)
}

export default handleSubmit;