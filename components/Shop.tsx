
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Check, 
  Info, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Filter, 
  ShoppingCart,
  Zap,
  ShieldCheck,
  Lightbulb,
  Package,
  Truck,
  Clock,
  MessageCircle
} from 'lucide-react';

interface Item {
  produto: string;
  qtd: number;
  unidade: string;
}

interface PackageData {
  id: string;
  nome: string;
  descricao: string;
  categoria: string;
  preco: number;
  itens: Item[];
  tags: string[];
  icon: React.ReactNode;
}

const PACKAGES: PackageData[] = [
  {
    id: 'p-001',
    nome: 'Combo Reforma Total + Lâmpadas',
    descricao: 'Solução completa para renovação elétrica de casas de até 2 quartos.',
    categoria: 'Instalação Completa',
    preco: 1249.90,
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    itens: [
      { produto: 'Tomada 10A', qtd: 20, unidade: 'un' },
      { produto: 'Interruptor Simples', qtd: 10, unidade: 'un' },
      { produto: 'Cabo Flexível 2.5mm', qtd: 200, unidade: 'm' },
      { produto: 'Lâmpada LED 9W', qtd: 10, unidade: 'un' },
      { produto: 'Quadro de Disjuntores 12 vias', qtd: 1, unidade: 'un' }
    ],
    tags: ['Recomendado', 'Frete Grátis']
  },
  {
    id: 'p-002',
    nome: 'Kit Essencial Tomadas e Interruptores',
    descricao: 'Troque as peças amareladas ou quebradas por modelos novos e seguros.',
    categoria: 'Tomadas & Interruptores',
    preco: 289.90,
    icon: <Package className="w-6 h-6 text-blue-500" />,
    itens: [
      { produto: 'Tomada 10A', qtd: 12, unidade: 'un' },
      { produto: 'Tomada 20A', qtd: 3, unidade: 'un' },
      { produto: 'Interruptor Simples', qtd: 6, unidade: 'un' },
      { produto: 'Caixa 4x2', qtd: 10, unidade: 'un' }
    ],
    tags: ['Mais Vendido']
  },
  {
    id: 'p-003',
    nome: 'Kit Proteção Segura (Quadro)',
    descricao: 'Proteja seus eletrodomésticos contra curtos e sobrecargas.',
    categoria: 'Proteção & Disjuntores',
    preco: 459.90,
    icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
    itens: [
      { produto: 'Quadro para 12 disjuntores', qtd: 1, unidade: 'un' },
      { produto: 'Disjuntor 20A', qtd: 6, unidade: 'un' },
      { produto: 'Disjuntor 32A', qtd: 2, unidade: 'un' },
      { produto: 'Barramento', qtd: 1, unidade: 'un' }
    ],
    tags: ['Segurança']
  },
  {
    id: 'p-004',
    nome: 'Iluminação LED Econômica',
    descricao: 'Troque todas as lâmpadas da casa por LED e economize na conta de luz.',
    categoria: 'Iluminação',
    preco: 349.90,
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    itens: [
      { produto: 'Lâmpada LED 9W (Bivolt)', qtd: 15, unidade: 'un' },
      { produto: 'Plafon LED de sobrepor 18W', qtd: 5, unidade: 'un' }
    ],
    tags: ['Econômico']
  },
  {
    id: 'p-005',
    nome: 'Padrão Light Completo (Entrada)',
    descricao: 'Material completo para instalação do relógio medidor padrão Light.',
    categoria: 'Padrão Light',
    preco: 890.00,
    icon: <Zap className="w-6 h-6 text-orange-500" />,
    itens: [
      { produto: 'Caixa de medidor', qtd: 1, unidade: 'un' },
      { produto: 'Haste de aterramento', qtd: 1, unidade: 'un' },
      { produto: 'Cabos de entrada 10mm', qtd: 10, unidade: 'm' },
      { produto: 'Conectores', qtd: 4, unidade: 'un' }
    ],
    tags: ['Padrão Light']
  },
  {
    id: 'p-006',
    nome: 'Kit Cozinha e Área de Serviço',
    descricao: 'Reforce a fiação para eletrodomésticos pesados (Airfryer, Máquina).',
    categoria: 'Tomadas & Interruptores',
    preco: 399.90,
    icon: <Package className="w-6 h-6 text-indigo-500" />,
    itens: [
      { produto: 'Tomada 20A', qtd: 5, unidade: 'un' },
      { produto: 'Cabo Flexível 4.0mm', qtd: 50, unidade: 'm' },
      { produto: 'Disjuntor 25A', qtd: 2, unidade: 'un' }
    ],
    tags: ['Uso Pesado']
  },
  {
    id: 'p-007',
    nome: 'Kit Quarto/Sala Moderno',
    descricao: 'Ideal para quem quer adicionar pontos de tomada e interruptores.',
    categoria: 'Instalação Completa',
    preco: 315.00,
    icon: <Package className="w-6 h-6 text-green-500" />,
    itens: [
      { produto: 'Tomada 10A', qtd: 8, unidade: 'un' },
      { produto: 'Interruptor paralelo', qtd: 4, unidade: 'un' },
      { produto: 'Cabo Flexível 2.5mm', qtd: 50, unidade: 'm' },
      { produto: 'Caixa 4x2', qtd: 5, unidade: 'un' }
    ],
    tags: []
  },
  {
    id: 'p-008',
    nome: 'Kit Reparo Rápido',
    descricao: 'Itens básicos para ter sempre em casa para pequenas manutenções.',
    categoria: 'Tomadas & Interruptores',
    preco: 85.00,
    icon: <Package className="w-6 h-6 text-gray-500" />,
    itens: [
      { produto: 'Tomada 10A', qtd: 2, unidade: 'un' },
      { produto: 'Interruptor Simples', qtd: 1, unidade: 'un' },
      { produto: 'Rolo Fita Isolante', qtd: 1, unidade: 'un' },
      { produto: 'Fio paralelo', qtd: 5, unidade: 'm' }
    ],
    tags: ['Básico']
  }
];

const CATEGORIES = [
  'Todos',
  'Instalação Completa',
  'Iluminação',
  'Tomadas & Interruptores',
  'Proteção & Disjuntores',
  'Padrão Light'
];

const FAQ = [
  {
    q: 'Os pacotes incluem a mão de obra de instalação?',
    a: 'Não. Os valores referem-se apenas aos materiais elétricos. Caso precise de instalação, você pode solicitar um orçamento separado com nossa equipe técnica.'
  },
  {
    q: 'Posso alterar as quantidades de um pacote?',
    a: 'Os pacotes são fechados para garantir o preço promocional. No entanto, você pode adicionar itens avulsos ao seu carrinho entrando em contato conosco.'
  },
  {
    q: 'Qual o prazo de entrega para a Taquara e região?',
    a: 'Entregamos em até 24h úteis para pedidos confirmados até as 14h na região da Taquara e Jacarepaguá.'
  },
  {
    q: 'Os produtos possuem garantia?',
    a: 'Sim, todos os materiais possuem garantia de fábrica contra defeitos de fabricação (mínimo de 90 dias).'
  },
  {
    q: 'Como é feito o pagamento?',
    a: 'Você pode pagar via Pix, Cartão de Crédito ou diretamente na entrega. O fechamento final é feito via WhatsApp.'
  }
];

const Shop: React.FC = () => {
  const [cart, setCart] = useState<PackageData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState('featured');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageData | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const filteredPackages = useMemo(() => {
    let result = [...PACKAGES];
    
    if (selectedCategory !== 'Todos') {
      result = result.filter(p => p.categoria === selectedCategory);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.preco - b.preco);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.preco - a.preco);
    }

    return result;
  }, [selectedCategory, sortBy]);

  const addToCart = (pkg: PackageData) => {
    setCart(prev => [...prev, pkg]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const totalCart = cart.reduce((sum, item) => sum + item.preco, 0);

  const handleCheckout = () => {
    const message = `Olá! Gostaria de fazer um pedido dos seguintes pacotes:\n\n${cart.map(item => `- ${item.nome} (R$ ${item.preco.toFixed(2)})`).join('\n')}\n\nTotal: R$ ${totalCart.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5521989714357?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="compras" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-[#1B2588] mb-4 uppercase tracking-tight"
          >
            Loja de Materiais Elétricos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Escolha um de nossos combos prontos e economize tempo e dinheiro na sua reforma. 
            Praticidade e segurança para sua casa.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            <Filter className="w-5 h-5 text-slate-400 flex-shrink-0" />
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat 
                    ? 'bg-[#1B2588] text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Ordenar:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-100 text-slate-700 text-sm font-bold py-2 px-4 rounded-lg border-none focus:ring-2 focus:ring-[#1B2588] outline-none cursor-pointer"
            >
              <option value="featured">Destaques</option>
              <option value="price-asc">Menor Preço</option>
              <option value="price-desc">Maior Preço</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col group hover:border-[#F1B524] transition-all duration-300"
            >
              <div className="mb-4 flex justify-between items-start">
                <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-yellow-50 transition-colors">
                  {pkg.icon}
                </div>
                <div className="flex flex-wrap gap-2 justify-end">
                  {pkg.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-yellow-400 text-white px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <h3 className="text-xl font-black text-[#1B2588] mb-2 leading-tight">
                {pkg.nome}
              </h3>
              <p className="text-slate-500 text-sm mb-6 flex-grow">
                {pkg.descricao}
              </p>

              <div className="mb-6">
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Itens Inclusos:</div>
                <ul className="space-y-1">
                  {pkg.itens.slice(0, 3).map((item, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-500" />
                      {item.qtd}{item.unidade} {item.produto}
                    </li>
                  ))}
                  {pkg.itens.length > 3 && (
                    <li className="text-xs text-[#1B2588] font-bold mt-1">
                      + {pkg.itens.length - 3} outros itens
                    </li>
                  )}
                </ul>
              </div>

              <div className="mt-auto">
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-sm font-bold text-slate-400">R$</span>
                  <span className="text-3xl font-black text-slate-900">
                    {pkg.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => setSelectedPackage(pkg)}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all"
                  >
                    <Info className="w-4 h-4" />
                    Itens
                  </button>
                  <button 
                    onClick={() => addToCart(pkg)}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1B2588] text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/20"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Comprar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-32 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-[#1B2588] uppercase tracking-tight mb-4">Dúvidas Frequentes</h3>
            <p className="text-slate-500">Tudo o que você precisa saber sobre nossos pacotes de materiais.</p>
          </div>
          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800">{item.q}</span>
                  {openFaqIndex === idx ? <ChevronUp className="w-5 h-5 text-[#F1B524]" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-50">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-16">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-50 rounded-2xl">
              <Truck className="w-8 h-8 text-[#1B2588]" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest">Entrega Rápida</h4>
              <p className="text-xs text-slate-500">Em até 24h para Taquara e região.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-yellow-50 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-[#F1B524]" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest">Qualidade Garantida</h4>
              <p className="text-xs text-slate-500">Materiais certificados e seguros.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-50 rounded-2xl">
              <Clock className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest">Suporte Técnico</h4>
              <p className="text-xs text-slate-500">Tire suas dúvidas via WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Package Details Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPackage(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#F1B524] mb-1 block">
                      {selectedPackage.categoria}
                    </span>
                    <h3 className="text-2xl font-black text-[#1B2588] leading-tight">
                      {selectedPackage.nome}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedPackage(null)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-400" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Lista Completa de Itens:</h4>
                    <div className="bg-slate-50 rounded-2xl p-6 space-y-3">
                      {selectedPackage.itens.map((item, i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                          <span className="text-slate-700 font-medium">{item.produto}</span>
                          <span className="font-black text-[#1B2588] bg-white px-3 py-1 rounded-lg shadow-sm border border-slate-100">
                            {item.qtd} {item.unidade}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Preço do Combo:</div>
                      <div className="text-3xl font-black text-slate-900">
                        R$ {selectedPackage.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        addToCart(selectedPackage);
                        setSelectedPackage(null);
                      }}
                      className="bg-[#1B2588] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/20 flex items-center gap-3"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-[110] flex justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative bg-white w-full max-w-md h-full shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <ShoppingCart className="w-6 h-6 text-[#1B2588]" />
                  </div>
                  <h3 className="text-xl font-black text-[#1B2588] uppercase tracking-tight">Seu Carrinho</h3>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-8 space-y-6">
                {cart.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShoppingBag className="w-10 h-10 text-slate-200" />
                    </div>
                    <p className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-2">Seu carrinho está vazio</p>
                    <p className="text-slate-500 text-sm">Que tal começar com um Kit Essencial?</p>
                  </div>
                ) : (
                  cart.map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-slate-800 text-sm leading-tight mb-1">{item.nome}</h4>
                        <div className="text-[#1B2588] font-black text-sm">R$ {item.preco.toFixed(2)}</div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(idx)}
                        className="p-2 h-fit text-slate-300 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-8 bg-slate-50 border-t border-slate-100">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">Total Estimado</span>
                    <span className="text-2xl font-black text-slate-900">R$ {totalCart.toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={handleCheckout}
                    className="w-full bg-[#1B2588] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Finalizar via WhatsApp
                  </button>
                  <p className="text-center text-[10px] text-slate-400 mt-4 uppercase font-bold tracking-widest">
                    O pagamento e entrega serão combinados no chat.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Cart Button (Mobile) */}
      {cart.length > 0 && !isCartOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 z-[90] bg-[#F1B524] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        >
          <ShoppingCart className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 bg-[#1B2588] text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
            {cart.length}
          </span>
        </motion.button>
      )}
    </section>
  );
};

export default Shop;
