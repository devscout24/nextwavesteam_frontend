import {
  Check,
  Package,
  MessageSquare,
  Star,
  CheckCircle,
} from "lucide-react"

const notifications = [
  {
    id: 1,
    title: "Your order FG-20248743 has been shipped!",
    description:
      "Expected delivery by 25 Jun 2025. Track your order for live updates.",
    time: "2 hours ago",
    icon: Package,
    iconBg: "bg-purple-100",
    iconColor: "text-violet-600",
    unread: true,
    active: true,
  },
  {
    id: 2,
    title: "New message from Virat Kohli",
    description:
      "Your personalised video message is now ready to view.",
    time: "Yesterday",
    icon: MessageSquare,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    unread: true,
    active: true,
  },
  {
    id: 3,
    title: "Insider membership renewed",
    description:
      "Your Gold Insider membership with Virat Kohli has been renewed.",
    time: "3 days ago",
    icon: Star,
    iconBg: "bg-yellow-100",
    iconColor: "text-amber-500",
    unread: false,
  },
  {
    id: 4,
    title: "Order FG-20248812 delivered!",
    description:
      "Your Signed Cricket Bat has been delivered. Leave a review?",
    time: "5 days ago",
    icon: CheckCircle,
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    unread: false,
  },
]

export default function NotificationPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4   md:px-6 lg:px-8 py-25">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-4 shadow-xl sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-600 text-lg font-semibold text-white">
              A
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Notifications
              </h2>

              <p className="text-sm text-gray-500">
                2 unread
              </p>
            </div>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-700 sm:w-auto">
            <Check size={16} />
            Mark all as read
          </button>
        </div>

        {/* Notification List */}
        <div className="space-y-4">
          {notifications.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                  item.active
                    ? "border-violet-200"
                    : "border-gray-200"
                }`}
              >
                {item.active && (
                  <div className="absolute left-0 top-0 h-full w-1 bg-violet-600" />
                )}

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  {/* Left */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${item.iconBg}`}
                    >
                      <Icon
                        size={18}
                        className={item.iconColor}
                      />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-2 self-end md:self-center">
                    <span className="text-sm whitespace-nowrap text-gray-500">
                      {item.time}
                    </span>

                    {item.unread && (
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-violet-600" />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}