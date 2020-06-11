import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { loadSample } from 'lib/sample/actions';
import { RootState } from 'lib/reducer';
import { SampleState } from 'lib/sample/reducer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(0),
      padding: theme.spacing(2),
    },
  }),
);

const Sample: NextPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSample());
  }, [dispatch]);

  const sampleSelector = useSelector<RootState, SampleState>(
    (state) => state.sampleState,
  );
  const { sample } = sampleSelector;
  return <div className={classes.root}>Sample : {sample}</div>;
};
export default Sample;
