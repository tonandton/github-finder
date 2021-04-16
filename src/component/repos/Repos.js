import React from "react";
import PropTypes from "prop-types";
import ReposItem from "./ReposItem";

const Repos = ({ repos }) => {
    return repos.map((repo) => <ReposItem repos={repo} key={repo.id} />);
};

Repos.propsTypes = {
    repos: PropTypes.array.isRequired,
};

export default Repos;
