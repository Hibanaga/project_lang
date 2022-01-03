

export const convertToJSON = (item:string) =>  {
  if (item.length >0 ) {
    const convertedToArrayString = item.split("-").filter(e => e);
    const result = convertedToArrayString.reduce((prev, item): any => {
      const [key, value] = item.split(":");
      prev = { ...prev, [key]: JSON.parse(value) };
      return prev;
    }, {});
    return result
  } else {
    return {};
  }
 
}

export const convertToString = (item:any) => {
  let stringArr = "";

  for (let el in item) {
    stringArr += `${el}: [${item[el]}]-`
  }

 return stringArr;
}