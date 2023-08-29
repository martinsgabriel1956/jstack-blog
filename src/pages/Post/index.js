import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

export function Post() {
  const params = useParams();
  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  console.debug("Post", params, queryParams.get("meuQueryParam"));

  return <h1>Post</h1>;
}
