// @flow
export const handleSubmit = async (values, props) => {
    await props.props.sendEmailLead(values)
}

export default handleSubmit;