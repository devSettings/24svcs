import Image from "next/image";
import { Card, CardContent } from "~/components/ui/card";

import type React from "react";

export interface Author {
  name: string;
  image: string;
  date: string;
}

export interface BlogPost {
  category: string;
  title: string;
  description: string;
  image: string;
  author: Author;
}

const blogPosts: BlogPost[] = [
  {
    category: "Industry Insights",
    title: "The Future of SaaS: Trends to Watch in 2023",
    description:
      "Discover the latest trends in SaaS that are shaping the future of digital solutions and how your business can benefit.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60",
    author: {
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
      date: "January 15, 2023",
    },
  },
  {
    category: "Business Growth",
    title: "Boost Your Business with Custom Software Solutions",
    description:
      "Learn how custom software solutions can streamline your operations and drive growth in your business.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    author: {
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60",
      date: "February 20, 2023",
    },
  },
  {
    category: "Case Studies",
    title: "Case Study: How We Helped XYZ Corp Increase Efficiency",
    description:
      "A detailed case study on how our digital solutions helped XYZ Corp improve their efficiency by 30%.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60",
    author: {
      name: "Alice Johnson",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
      date: "March 10, 2023",
    },
  },
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Card className="group overflow-hidden border-zinc-800 bg-zinc-900">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <span className="text-sm font-medium text-emerald-500">
            {post.category}
          </span>
          <h3 className="text-2xl font-bold text-white transition-colors duration-200 group-hover:text-emerald-500">
            {post.title}
          </h3>
          <p className="line-clamp-2 text-zinc-400">{post.description}</p>
          <div className="flex items-center gap-3 pt-4">
            <Image
              src={post.author.image || "/placeholder.svg"}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="text-sm font-medium text-white">
                {post.author.name}
              </div>
              <div className="text-sm text-zinc-400">{post.author.date}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const BlogSection: React.FC = () => {
  return (
    <section className="w-full bg-black px-4 py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Latest Insights
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-zinc-400">
            Stay updated with the latest trends and insights from our experts.
            Read our articles on various topics and enhance your knowledge.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
