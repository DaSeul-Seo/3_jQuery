<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String user = request.getParameter("user");
String message = request.getParameter("msg");
%>
<!-- JSON 모양의 문자열 -->
{"user":"<%=user %>", "msg":"<%=message %>"}
