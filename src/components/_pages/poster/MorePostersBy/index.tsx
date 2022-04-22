import React, { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import GridLayout from "layouts/GridLayout";
import Grid from "components/Grid";
import PosterCard from "components/PosterCard";
import { useGetPoster } from "hooks/useGetPoster";
import { IPoster } from "types";

const MorePostersBy: FunctionComponent = () => {
  const { t } = useTranslation();
  const { posterResponse } = useGetPoster();

  return (
    <Fragment>
      <div className="py-10 text-center uppercase font-semibold">{t("More arts by")} Itoko Toma</div>
      <GridLayout>
        {!posterResponse?.data?.morePosterResponse?.isLoading ? (
          <Grid>
            {posterResponse?.data?.morePosterResponse.data.map((poster: IPoster, index: number) => {
              return <PosterCard data={poster} key={index} />;
            })}
          </Grid>
        ) : (
          <Fragment></Fragment>
        )}
      </GridLayout>
    </Fragment>
  );
};

export default MorePostersBy;
