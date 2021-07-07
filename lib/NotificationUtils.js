export const countUnread = notifications => {
    const unreadNotification = notifications.filter(item => item.is_seen).length

    return {notifications,unreadNotification}
}