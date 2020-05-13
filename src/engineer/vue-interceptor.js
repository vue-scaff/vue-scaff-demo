export default ({ Request, Response }, { everyRequest, everyResponse }) => {
  Request.data = {
    message: `request data`
  };

  Request.headers = {
    "Content-Type": `application/json`
  };

  Response.success = async response => {
    return await everyResponse(response);
  };

  Response.error = response => {
    return response;
  };

  Request.every = everyRequest;

  return {
    Request,
    Response
  };
};
