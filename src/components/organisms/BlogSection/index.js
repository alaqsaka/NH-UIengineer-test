import React from "react";
import {
  Container,
  BlogDiv,
  FilterDiv,
  KategoriBlog,
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
        </div>
        <KategoriBlog>
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
        </KategoriBlog>
      </BlogDiv>
    </Container>
  );
}
