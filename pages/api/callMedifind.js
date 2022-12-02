import axios from 'axios';
const callMedifind = async(req, res) {
  axios.get("https://www.medifind.com/api/autocomplete/magic?input=ae")
  .then( resp => {
    console.log(resp)
  })

}

export default callMedifind;