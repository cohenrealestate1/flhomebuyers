// @flow
import { Routes } from "../../constants";

export const handleSubmit = async (values, props) => {
    const vals = {
        ...values,
        pathname: props.props.history.location.pathname
    };
    await props.props.sendEmailLead(vals);
    await props.props.history.push(Routes.ThankYouLeadIntakeForm)
}

export default handleSubmit;