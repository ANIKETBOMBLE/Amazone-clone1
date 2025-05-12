// import { useEffect, useState } from "react";
import { useAuth } from "../Componetus/AuthContext";
import {  useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import { auth } from "./firebase";
import { Link } from "react-router-dom";
// import Auth

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearInterval(timer);
  }, []); //mounting

  if (isLoading) return <h1>Loading...</h1>;

  if (!user) return navigate("/Login");


  return children;
}

export default ProtectedRoute;
