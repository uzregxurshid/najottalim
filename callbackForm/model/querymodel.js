const createQuery = (name, email, text, answeredTime=false) =>{
  const firstname = name.first;
  const lastname = name.last;
  
  const query = {
    firstname,
    lastname,
    email,
    text,
    queryTime: new Date().valueOf(),
    answeredTime
  };

  return query;
};

module.exports= createQuery;