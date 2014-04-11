bee-mail
========
发送邮件

```xml
<?xml version="1.0" encoding="utf-8"?>
<project name="test" description="bee mail test">
  
  <property name="user" value="colorhook@gmail.com"/>
  <property name="from" value="colorhook@gmail.com"/>
  <property name="to" value="colorhook@gmail.com"/>

  <target name="default">
    <input setproperty='gmail.password' message='your gmail password? ' password='true'/>
    <echo>${gmail.password}</echo>
    <mail service='Gmail'>
	  <auth user='${user}' pass='${gmail.password}'/>
	  <message from="${from}" to="${to}">
		<html>
			<![CDATA[
			<b>Hello</b>, <span style='color:red'>bee-mail</span>
			]]>
		</html>
	  </message>
    </mail>
  </target>

</project>
```