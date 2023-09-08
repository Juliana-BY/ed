/*
##########################################
# EP1 - Estatística Básica
# Autor: Juliana Bérgamo Yázigi
# Data: 21/08/2023
##########################################
*/
#include <stdio.h>
#include <math.h>
#define  TAM_MAX 10

int main() {
    int n;
    float num, soma=0, media=0, vetor[TAM_MAX], maior, menor, med, somaD=0, temp, swapped, novo[TAM_MAX];
    
    printf("Quantos números na sua série (N): ");
    scanf("%d", &n);
    
    if( n > TAM_MAX ){
        printf("O número máximo de elementos é %d\n", TAM_MAX);
        return 0;
    }
        
    printf("Entre com números: ");
    for(int conta=0; conta<n ; conta++) { //permite a entrada de números enquanto não atingido n
        printf("%d > ", conta+1);          
        scanf("%f", &num);
        vetor[conta] = num; //adiciona o número no vetor,no indice conta
        soma = soma + num;
    }

    media = soma/n;
    printf("Média aritimética: %.2f \n", media); //MÉDIA
    
    for(int i=0; i<n; i++ ){
        somaD += (vetor[i]-media)*(vetor[i]-media); // calculo para desvio padrão
        if (i==0) {
            maior = vetor[i];
            menor = vetor[i];
        }
        if (vetor[i]>maior) {
                maior = vetor[i];
        }
        if (vetor[i]<menor) {
            menor = vetor[i];
        }
    }
    printf("Valor  máximo: %.2f\n", maior); //VALOR MAXIMO
    printf("Valor  mínimo: %.2f\n", menor); //VALOR MINIMO
    printf("Desvio padrão populacional: %.2f\n", sqrt( somaD / n ) ); //DESVIO PADRÃO POPULACIONAL
    printf("O desvio padrão amostral: %.2f\n", sqrt( somaD / (n-1) ) ); //DESVIO PADRÃO AMOSTRAL

    do {
        swapped = 0;
        for (int i = 0; i < n - 1; i++) {
            if (vetor[i] > vetor[i + 1]) {
                // Troca os elementos se estiverem fora de ordem
                temp = vetor[i];
                vetor[i] = vetor[i + 1];
                vetor[i + 1] = temp;
                swapped = 1;
            }
        }
    } while (swapped);

    for (int i = 0; i < n; i++) {
       novo[i]=vetor[i];
    }

   if (n%2==0) {
        float meio1 = novo[n / 2 - 1];
        float meio2 = novo[n / 2];
        med = (meio1+meio2)/2;
        printf("Mediana: %.2f\n", med); //MEDIANA se n par
    } 
    else {
        med = novo[n/2];
        printf("Mediana: %.2f\n", med); //MEDIANA se n ímpar
    } 
    return 0;
}




    
    
    
    
