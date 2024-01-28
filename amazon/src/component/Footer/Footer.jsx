import * as React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import {
  getToKnowUs,
  makeMoneyWithUs,
  connectWith,
  letUsHelpYou,
  abeBooks,
  amazonWebServices,
  audible,
  Imdb,
} from "../../component/DataConfig";
const Footer = () => {
  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Typography
        varient="h5"
        className="backToTop"
        onClick={scrollTo}
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "59px",
          alignItems: "center",
          color: "#fff",
          background: "#37475A",
        }}
      >
        Back of top
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "82%",
          margin: "auto",
          fontSize: "12px",
          background: "#232F3E",
          marginTop: "1px !important",
        }}
      >
        <Grid item sx={6} sm={4} md={2}>
          {getToKnowUs.map((item, index) => {
            return (
              <>
                <Typography
                  key={index}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "900",
                    color: "#fff",
                  }}
                >
                  {item?.title}
                </Typography>
                {item.child.map((item, index) => {
                  return (
                    <Typography
                      sx={{
                        fontSize: "14px",
                        lineHeight: "2rem !important",
                        color: "#fff",
                      }}
                      key={index}
                      className="Footer"
                    >
                      <a href="#" className="footerLinkTag1">
                        {item.option}
                      </a>
                    </Typography>
                  );
                })}
              </>
            );
          })}
        </Grid>
        <Grid item sx={6} sm={4} md={2}>
          {connectWith.map((item, index) => {
            return (
              <>
                <Typography
                  key={index}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "900",
                    color: "#fff",
                  }}
                >
                  {item?.title}
                </Typography>
                {item.child.map((item, index) => {
                  return (
                    <Typography
                      key={index}
                      sx={{
                        fontSize: "14px",
                        lineHeight: "2rem !important",
                        color: "#fff",
                      }}
                    >
                      <a href="#" className="footerLinkTag1">
                        {" "}
                        {item.option}
                      </a>
                    </Typography>
                  );
                })}
              </>
            );
          })}
        </Grid>
        <Grid item xs={2} sm={4} md={2}>
          {makeMoneyWithUs.map((item, index) => {
            return (
              <>
                <Typography
                  key={index}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "900",
                    color: "#fff",
                  }}
                >
                  {item.title}
                </Typography>
                {item.child.map((item, index) => {
                  return (
                    <Typography
                      key={index}
                      sx={{
                        fontSize: "14px",
                        lineHeight: "2rem !important",
                        color: "#fff",
                      }}
                    >
                      <a href="#" className="footerLinkTag1">
                        {item?.option}
                      </a>
                    </Typography>
                  );
                })}
              </>
            );
          })}
        </Grid>
        <Grid item xs={2} sm={4} md={2}>
          {letUsHelpYou.map((item, index) => {
            return (
              <>
                <Typography
                  key={index}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "900",
                    color: "#fff",
                  }}
                >
                  {" "}
                  {item.title}
                </Typography>
                {item.child.map((item, index) => {
                  return (
                    <Typography
                      key={index}
                      sx={{
                        fontSize: "14px",
                        lineHeight: "2rem !important",
                        color: "#fff",
                      }}
                    >
                      <a href="#" className="footerLinkTag1">
                        {item?.option}
                      </a>
                    </Typography>
                  );
                })}
              </>
            );
          })}
        </Grid>
      </Grid>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "82%",
          margin: "auto",
          fontSize: "14px",
          background: "#131A22",
          marginTop: "1px !important",
        }}
      >
        <Grid item sx={6} sm={4} md={2}>
          {abeBooks.map((item, index) => {
            return (
              <>
                <Typography
                  key={index}
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  {item?.title}
                </Typography>
                {item.child.map((item, index) => {
                  return (
                    <Typography
                      sx={{
                        fontSize: "14px",
                        lineHeight: "2rem !important",
                        color: "#fff",
                      }}
                      key={index}
                    >
                      {item.option}
                    </Typography>
                  );
                })}
              </>
            );
          })}
        </Grid>
        <Grid item sx={6} sm={4} md={2}>
          {amazonWebServices.map((item, index) => {
            return (
              <>
                <Typography
                  key={index}
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  {item?.title}
                </Typography>
                {item.child.map((item, index) => {
                  return (
                    <Typography
                      key={index}
                      sx={{
                        fontSize: "12px",
                        lineHeight: "2rem !important",
                        color: "#fff",
                      }}
                    >
                      {item.option}
                    </Typography>
                  );
                })}
              </>
            );
          })}
        </Grid>
        <Grid item xs={2} sm={4} md={2}>
          {audible.map((item, index) => {
            return (
              <>
                <Typography
                  key={index}
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  {" "}
                  {item.title}
                </Typography>
                {item.child.map((item, index) => {
                  return (
                    <Typography
                      key={index}
                      sx={{
                        fontSize: "12px",
                        lineHeight: "2rem !important",
                        color: "#fff",
                      }}
                    >
                      {item?.option}
                    </Typography>
                  );
                })}
              </>
            );
          })}
        </Grid>
        <Grid item xs={2} sm={4} md={2}>
          {Imdb.map((item, index) => {
            return (
              <>
                <Typography
                  key={index}
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  {item.title}
                </Typography>
                {item.child.map((item, index) => {
                  return (
                    <Typography
                      key={index}
                      sx={{
                        fontSize: "12px",
                        lineHeight: "2rem !important",
                        color: "#fff",
                      }}
                    >
                      {item?.option}
                    </Typography>
                  );
                })}
              </>
            );
          })}
        </Grid>
        <Grid item xs={12} md={12} sm={12} sx={{}}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a href="#" style={{ color: "white" }} className="footerLinkTag">
              Conditions of Use & Sale
            </a>
            <a href="#" className="footerLinkTag">
              {" "}
              Privacy Notice
            </a>
            <a href="#" className="footerLinkTag">
              Interest-Based Ads
            </a>
          </Typography>
          <Typography
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#fff",
              marginTop: "9px",
              fontSize: "10px",
            }}
          >
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;
