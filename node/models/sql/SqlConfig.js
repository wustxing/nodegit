module.exports = {
    Admin_User_INSERT:"INSERT INTO tk_admin_user (LoginName, Password,DataStatus,LastUpdateOn) VALUES (?)",
    Admin_User_GETALL:"select * from tk_admin_user",
    Admin_User_GETONEBYID:"select * from tk_admin_user where UserId=?",
    Admin_User_DEL:"delete from tk_admin_user where UserId=?"
    //Admin_User_UPDATE:"update tk_admin_user set LoginName =?, Password='"+user.Password+"',DataStatus='"+user.DataStatus+"',LastUpdateOn='"+user.LastUpdateOn+ "' WHERE UserId ="+user.UserId;
};