import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const musicCards = [
    {
      id: 1,
      image:
        "https://cdn.poehali.dev/files/ed10f634-bfe9-4027-88ec-a8f75e8bcaba.jpeg",
      title: "Цветами",
      artist: "Темный принц",
      lyrics: `Ну а ты пахнешь цветами
Самыми вкусными травами
Самыми яркими красками
О-о-о, как глоток пива «Дон»

И я знаю, твой толер выше, чем у других
На двоих алкоголя хватило бы, чтобы открыть магазин
Но лучше расслабиться дома
Под пледом с тобой одним`,
    },
    {
      id: 2,
      image:
        "https://cdn.poehali.dev/files/ed10f634-bfe9-4027-88ec-a8f75e8bcaba.jpeg",
      title: "Тени Хиросимы",
      artist: "GONE.Fludd",
      lyrics: `[Текст песни требует авторизации]

Для прослушивания и просмотра полного текста
сканируйте QR-код выше

Глубокая песня о памяти и боли,
о тенях, которые остаются после трагедии,
о том, как история отпечатывается
в наших сердцах навсегда.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Music" size={24} className="text-black" />
              <h1 className="text-2xl font-bold text-black">
                Музыкальные открытки
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#gallery"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Галерея
              </a>
              <a
                href="#lyrics"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Тексты
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-black transition-colors"
              >
                О проекте
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-black mb-6">
            Моему самому любимому
            <span className="block text-gray-600">мальчику Максимке</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Сканируйте QR-код, слушайте музыку и читайте тексты песен. Каждая
            фотография — это история, рассказанная через мелодию.
          </p>
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white px-8 py-3"
            onClick={() =>
              document
                .getElementById("gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Начать путешествие
          </Button>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-black mb-12 text-center">
            Фотогалерея
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {musicCards.map((card) => (
              <Card
                key={card.id}
                className="group hover:shadow-lg hover-lift transition-all duration-300 border-gray-200 animate-fade-in"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <Icon
                          name="Play"
                          size={40}
                          className="text-white mx-auto mb-2"
                        />
                        <p className="text-white text-sm">Сканируй QR-код</p>
                      </div>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="p-6 text-center border-b border-gray-100">
                    <img
                      src="https://cdn.poehali.dev/files/3412579e-9dc1-4ee4-926f-cc7ec72bcd5c.jpeg"
                      alt="QR Code"
                      className="w-20 h-20 mx-auto mb-4 border border-gray-200 rounded"
                    />
                    <h4 className="text-xl font-bold text-black mb-1">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{card.artist}</p>
                  </div>

                  {/* Lyrics */}
                  <div className="p-6">
                    <h5 className="text-lg font-semibold text-black mb-3">
                      Текст песни
                    </h5>
                    <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                      {card.lyrics}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Music" size={24} className="text-white" />
            <h3 className="text-xl font-bold">Музыкальные открытки</h3>
          </div>
          <p className="text-gray-400">
            Музыка соединяет сердца через время и пространство
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
