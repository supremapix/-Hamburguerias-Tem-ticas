import React, { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  public override state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#140608] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="bg-[#200A06] border-3 border-[#FF6B00] rounded-3xl p-8 max-w-md shadow-[0_0_30px_rgba(255,107,0,0.3)]">
            <span className="text-5xl mb-4 block">🎃</span>
            <h1 className="text-2xl font-black text-[#FF9E00] uppercase mb-2">Ops! Algo deu errado</h1>
            <p className="text-gray-300 text-sm mb-6">
              Ocorreu um imprevisto ao carregar a página. Clique abaixo para reiniciar a experiência cinematográfica da Burger Film's.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.href = '/';
              }}
              className="bg-[#FF6B00] hover:bg-[#FF8500] text-black font-black px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-all shadow-[3px_3px_0_#FFF] cursor-pointer"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
