import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Body</p>
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Photo by Drew Beamer"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>{' '}
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Body</p>
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Photo by Drew Beamer"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>{' '}
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}
