import Image from "next/image";
import { Card, CardContent } from "~/components/ui/card";

import type React from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

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
    <Card className="group overflow-hidden bg-muted/50">
      <div className="relative m-2 overflow-hidden rounded-md border-[0.1px] bg-accent/50">
        <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="overflow-hidden rounded-lg object-cover p-2.5"
          />
        </AspectRatio>
      </div>
      <CardContent className="p-6">
        <div className="space-y-6">
          <span className="text-sm font-medium text-cyan-500">
            {post.category}
          </span>
          <h3 className="text-lg font-bold text-white">{post.title}</h3>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {post.description}
          </p>
          <div className="mt-4 flex items-center gap-x-3">
            <Avatar>
              <AvatarImage src={post.author.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
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
    <section className="w-full bg-black px-2.5 py-24">
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
