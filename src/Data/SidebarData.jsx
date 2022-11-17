import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';

export const SidebarData = [
    {
        Title: "Dashboard",
        Icons: <DashboardOutlinedIcon />,
        link: "/"
    },
    {
        Title: "User",
            Icons: <PersonRoundedIcon/>,
        link: "/Calendar"
    },
    {
        Title: "Product",
            Icons: <CategoryRoundedIcon/>,
        link: "/Chat"
    },
    {
        Title: "Orders",
            Icons:<ShoppingCartRoundedIcon/>,
        link: "/Ecommerce"
    },
    {
        Title: "Messages",
            Icons: <MessageRoundedIcon/>,
        link: "/Email"
    },
    {
        Title: "Notification",
            Icons: <NotificationsRoundedIcon/>,
        link: "/Companies"
    },
    {
        Title: "Settings",
            Icons: <SettingsApplicationsRoundedIcon/>,
        link: "/Tasks"
    },
    {
        Title: "Blank Page",
            Icons: <CheckBoxOutlineBlankRoundedIcon/>,
        link: "/Tickets"
    },
    {
        Title: "Conatacts",
            Icons: <ContactMailOutlinedIcon/>,
        link: "/Conatacts"
    },
    
]
