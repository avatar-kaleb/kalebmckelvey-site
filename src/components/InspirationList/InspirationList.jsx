import React from "react";
import InspirationListItem from "../InspirationListItem/InspirationListItem";

const InspirationList = ({ inspirations }) => (
  <section>
    {inspirations.map(inspiration => <InspirationListItem key={inspiration.id} inspiration={inspiration} />)}
  </section>
);

export default InspirationList;
