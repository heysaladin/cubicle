import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export interface BlogCardProps {
  title: string;
  excerpt?: string;
  category?: string;
  publishedAt?: string;
  readTime?: string;
  authorName?: string;
  authorAvatar?: string;
  coverImage?: string;
  href?: string;
}

export function BlogCard({
  title,
  excerpt,
  category,
  publishedAt,
  readTime,
  authorName,
  authorAvatar,
  coverImage,
  href = '#',
}: BlogCardProps) {
  const initials = authorName
    ? authorName.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : 'A';

  return (
    <Card className="h-full overflow-hidden group hover:shadow-md transition-shadow">
      {coverImage && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        {category && (
          <Badge variant="secondary" className="w-fit text-xs mb-1">
            {category}
          </Badge>
        )}
        <a href={href} className="group/link">
          <h3 className="text-sm font-semibold leading-snug group-hover/link:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </a>
      </CardHeader>
      <CardContent className="space-y-3">
        {excerpt && (
          <p className="text-xs text-muted-foreground line-clamp-3">{excerpt}</p>
        )}
        <div className="flex items-center justify-between">
          {authorName && (
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                {authorAvatar && <AvatarImage src={authorAvatar} alt={authorName} />}
                <AvatarFallback className="text-[10px]">{initials}</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">{authorName}</span>
            </div>
          )}
          {(publishedAt || readTime) && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              {publishedAt && <span>{publishedAt}</span>}
              {publishedAt && readTime && <span>·</span>}
              {readTime && <span>{readTime} read</span>}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
