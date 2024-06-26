export default [
    {
        title: "Admin",
        path: '/admin',
        items: [
            {
                title: "Users",
                path: "/admin/users",
                icon: "User",
            },
            {
                title: "Roles",
                path: "/admin/roles",
                icon: "UserCog",
            },
        ],
    },
    {
        title: 'Manager',
        path: '/manager',
        items: [
            {
                title: "Students",
                path: "/manager/students",
                icon: "Users",
            },
            {
                title: "Groups",
                path: "/manager/groups",
                icon: "Group",
            },
            {
                title: "Teachers",
                path: "/manager/teachers",
                icon: "Users",
            },
            {
                title: "Subjects",
                path: "/manager/subjects",
                icon: "NotebookText",
            }
        ]
    },
    {
        title: "Teacher",
        path: '/teacher',
        items: [
            {
                title: "Questions",
                path: "/teacher/questions",
                icon: "CircleHelp",
            },
            {
                title: "Tests",
                path: "/teacher/tests",
                icon: "BookOpenCheck",
            },
            // {
            //     title: "Groups",
            //     path: "/teacher/groups",
            //     icon: "Group",
            // },
            // {
            //     title: "Subjects",
            //     path: "/teacher/subjects",
            //     icon: "NotebookText",
            // }
        ]
    }
]