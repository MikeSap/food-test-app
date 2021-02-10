import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer b2mTV5KTylMNVROHSyygP8WK6QntefXtSIf-rWd7Hbn3HFiShcgimHEfcNneP7F8p3DAUynSx_6Wg-rkPVGB5ivrw3AIkgWX44hTQD4z6-mYTlPhfvZftuH_wdkiYHYx",
  },
});
