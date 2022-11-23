import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import Navbar from "../../common/navbar/Navbar";
import MetaTags from "../../common/layout/MetaTags";

import Normal from "./tools/Card";

// Images - Normal
import normalImgOne from "../../../resources/images/about/sketLogo2.png";

const Blog = ({
  // Redux States
  auth: { isAuthenticated },
}) => {

  return (
    <>
      <MetaTags
        title={<title>Blog | Aunsh &middot; My Life</title>}
        link={"https://aunsh.com/admin/blog"}
        ogUrl={"https://aunsh.com/admin/blog"}
        description={"My life as I see it!"}
        twitterDescription={"My life as I see it!"}
        ogType={"website"}
      />
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={"blog app"}>
          <div className='main'>
            <div className='normal'>
              <div data-aos='fade-in' className='flex_middle'>
                <Normal
                  title={"My Entry for Today"}
                  description={
                    "My entry for today"
                  }
                  imageUrl={normalImgOne}
                  author={"Aunsh"}
                  type={"life"}
                  createdAt={"01 May 22"}
                  link={"/admin/blog/life/24-May-2022"}
                  feeling={1.5}
                />
              </div>
              <div data-aos='fade-in' className='flex_middle'>
                <Normal
                  title={"My Entry for Today"}
                  description={
                    "My entry for today"
                  }
                  imageUrl={normalImgOne}
                  author={"Aunsh"}
                  type={"ideas"}
                  createdAt={"01 May 22"}
                  link={"/admin/blog/ideas/24-May-2022"}
                  feeling={2.5}
                />
              </div>
              <div data-aos='fade-in' className='flex_middle'>
                <Normal
                  title={"My Entry for Today"}
                  description={
                    "My entry for today"
                  }
                  imageUrl={normalImgOne}
                  author={"Aunsh"}
                  type={"plans"}
                  createdAt={"01 May 22"}
                  link={"/admin/blog/ideas/24-May-2022"}
                  feeling={5}
                />
              </div>
              <div data-aos='fade-in' className='flex_middle'>
                <Normal
                  title={"My Entry for Today"}
                  description={
                    "My entry for today"
                  }
                  imageUrl={normalImgOne}
                  author={"Aunsh"}
                  type={"feelings"}
                  createdAt={"01 May 22"}
                  link={"/admin/blog/ideas/24-May-2022"}
                  feeling={1}
                />
              </div>
            </div>
          </div>
          {/* )} */}
        </div>
      </motion.div>
    </>
  );
};

Blog.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(Blog);
