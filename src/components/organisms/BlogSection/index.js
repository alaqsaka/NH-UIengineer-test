import React from "react";
import {
  Container,
  BlogDiv,
  FilterDiv,
  KategoriBlog,
  PaginationDiv,
} from "./BlogSectionStyles";
import Article from "../../molecules/Article";
import { Articles, Articles2 } from "../../../constants/constants";
import SubscriptionBanner from "../../molecules/SubscriptionBanner";
import ArticlesList from "../../molecules/ArticlesLists";
import Search from "../../atoms/Search";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

import { makeStyles } from "@material-ui/core/styles";

export default function BlogSection(props) {
  const useStyles = makeStyles({
    hideBorder: {
      "&.MuiAccordion-root:before": {
        display: "none",
      },
      "&.MuiPaper-elevation1": {
        "box-shadow": "none",
      },
      "&.MuiButtonBase-root-MuiPaginationItem-root": {},
    },
    changePaginationTextSize: {
      "&.MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
        "background-color": "rgba(0, 122, 255, 1) !important",
        color: "rgba(0, 122, 255, 1) !important",
        "font-size": "16px !important",
      },
    },
    selected: {
      background: "rgba(0, 122, 255, 1) !important",
      color: "#fff",
      "font-size": "16px",
    },
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#29384E",
        width: "54px",
        height: "54px",
        margin: "5px",
        "border-radius": "5px",
        border: "1px solid #D9DDE3",
        "font-size": "16px !important",
        "&.Mui-selected": {
          background: "#007AFF",
          color: "white",
          // borderRadius: '50%',
        },
      },
    },
    button: {
      "& .-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
        background: "blue",
      },
    },
  });

  const classes = useStyles();

  return (
    <Container>
      <BlogDiv>
        <div>
          <Article data={Articles}></Article>
          <Article data={Articles2}></Article>
          <SubscriptionBanner />
          <ArticlesList />
          <PaginationDiv>
            <Pagination
              classes={{ ul: classes.ul, button: classes.button }}
              count={10}
            />
          </PaginationDiv>
        </div>
        <KategoriBlog>
          <div>
            <Search placeholder="Cari artikel blog ..." icon />
            <FilterDiv>
              <h1>Kategori Blog</h1>
              <Accordion className={classes.hideBorder}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  Tutorial
                </AccordionSummary>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
              </Accordion>
              <Accordion className={classes.hideBorder}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  Digital Marketing
                </AccordionSummary>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
              </Accordion>
              <Accordion className={classes.hideBorder}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  Web Development & Design
                </AccordionSummary>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
              </Accordion>
              <Accordion className={classes.hideBorder}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  Insight Bisnis
                </AccordionSummary>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
              </Accordion>
              <Accordion className={classes.hideBorder}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  News & Updates
                </AccordionSummary>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
                <AccordionDetails>Tutorial</AccordionDetails>
              </Accordion>
            </FilterDiv>
          </div>
        </KategoriBlog>
      </BlogDiv>
    </Container>
  );
}
